import z from 'zod'
import { ptero } from './client'

export const allocationSchema = z.object({
  mode: z.enum(['balance', 'specific']),
  nodeId: z.number().optional(),
  excludeAllocations: z.array(z.number()).optional(),
})

export const findPetroAvailableAllocation =
  async (
    data: z.infer<typeof allocationSchema>,
  ) => {
    try {
      console.log('🔍 Finding available allocation with mode:', data.mode, 'nodeId:', data.nodeId)
      
      const nodesRes = await ptero.get(
        '/application/nodes',
      )

      const nodes = nodesRes.data.data
      console.log(`📊 Found ${nodes.length} nodes`)

      const nodeAllocations =
        await Promise.all(
          nodes.map(async (node: any) => {
            const allocationsRes =
              await ptero.get(
                `/application/nodes/${node.attributes.id}/allocations`,
              )

            const freeAllocations =
              allocationsRes.data.data.filter(
                (allocation: any) =>
                  !allocation.attributes.assigned &&
                  !(data.excludeAllocations || []).includes(allocation.attributes.id),
              )

            console.log(`Node ${node.attributes.name} (ID: ${node.attributes.id}): ${freeAllocations.length} free allocations`)

            return {
              nodeId:
                node.attributes.id,

              nodeName:
                node.attributes.name,

              freeAllocations,
            }
          }),
        )

      if (
        data.mode === 'specific' &&
        data.nodeId
      ) {
        const node =
          nodeAllocations.find(
            (n) =>
              n.nodeId ===
              data.nodeId,
          )

        if (!node) {
          throw new Error(
            'Node not found',
          )
        }

        if (
          node.freeAllocations
            .length === 0
        ) {
          throw new Error(
            'No free allocations available',
          )
        }

        console.log(`✅ Selected allocation ${node.freeAllocations[0].attributes.id} on node ${node.nodeId}`)
        return {
          nodeId: node.nodeId,

          allocation:
            node.freeAllocations[0]
              .attributes.id,
        }
      }

      const balancedNode =
        nodeAllocations.sort(
          (a, b) =>
            b.freeAllocations.length -
            a.freeAllocations.length,
        )[0]

      if (
        !balancedNode ||
        balancedNode
          .freeAllocations.length === 0
      ) {
        throw new Error(
          'No allocations available on any node',
        )
      }

      console.log(`✅ Selected allocation ${balancedNode.freeAllocations[0].attributes.id} on node ${balancedNode.nodeId} (${balancedNode.nodeName})`)
      return {
        nodeId: balancedNode.nodeId,

        allocation:
          balancedNode
            .freeAllocations[0]
            .attributes.id,
      }
    } catch (err: any) {
      console.error('❌ Allocation finding error:', err.response?.data || err.message)

      throw err
    }
  }
