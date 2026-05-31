export function convertPetroEggVariablesToEnvironment(eggData) {
    const environment = {};
    const variables = eggData.relationships.variables.data;
    for (const variable of variables) {
        const attrs = variable.attributes;
        environment[attrs.env_variable] = attrs.default_value ?? '';
    }
    return environment;
}
//# sourceMappingURL=nests-egg.js.map