import z from 'zod'
import { ptero } from './client'

export const allocationSchema = z.object({
  mode: z.enum(['balance', 'specific']),

  nodeId: z.number().optional(),
})

export const findPetroAvailableAllocation =
  async (
    data: z.infer<typeof allocationSchema>,
  ) => {
    try {
      const nodesRes = await ptero.get(
        '/application/nodes',
      )

      const nodes = nodesRes.data.data

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
                  !allocation.attributes
                    .assigned,
              )

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
          'No allocations available',
        )
      }

      return {
        nodeId: balancedNode.nodeId,

        allocation:
          balancedNode
            .freeAllocations[0]
            .attributes.id,
      }
    } catch (err: any) {
      console.error(
        err.response?.data || err,
      )

      throw err
    }
  }
