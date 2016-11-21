import { applyReference } from './po-helpers';

export function hasPolyglotTags(nodePath, config) {
    const extractors = config.getExtractors();
    return Boolean(extractors.find((ext) => ext.match(nodePath, config)));
}

export const extractPoEntry = (nodePath, config, filename) => {
    const { node } = nodePath;
    const extractors = config.getExtractors();
    const extractor = extractors.find((ext) => ext.match(nodePath, config));
    const poEntry = extractor.extract(nodePath, config);

    if (filename !== 'unknown') {
        return applyReference(poEntry, node, filename);
    }
    return poEntry;
};
