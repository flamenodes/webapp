export function convertPetroEggVariablesToEnvironment(
  eggData: any,
) {
  const environment: Record<
    string,
    string
  > = {}

  const variables =
    eggData.relationships.variables.data

  for (const variable of variables) {
    const attrs = variable.attributes

    environment[
      attrs.env_variable
    ] = attrs.default_value ?? ''
  }

  return environment
}
