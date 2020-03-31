

// Modeling the property sets in the SPDX 3.0 base profile
//

import { MinItems, MustMatch } from "./validation";

interface organization {
    name: string;
}

interface tool {
    name: string;
    version: string;
}

interface person {
    name: string;
    email: string;
    organization: organization;
}

type identity = organization | tool | person;

interface documentMetadata {
    spdxVersion: string & MustMatch<"SPDX-3.0">;
    dataLicense: string;
    SPDXID: string;
    documentNamespace: string;
    documentName: string;
    created: datetime;
    creators: identity[] & MinItems<1>;
}

interface document {
    metadata : documentMetadata;
}

interface artifact {
    SPDXID: string;
    name : string; 
    supplier : string; // why not identity?
    originator: string;
    checksum : string; // complex type? algorithm?
    summary : string; // PackageSummary
    description : string; // PackageDescription

}

interface package extends artifact {
    versionInfo: string; // also called PackageVersion
    packageFileName: string;
    downloadLocation : string; // url type?

}

interface file extends artifact {
    fileType : string; 
}

interface snippet extends artifact {
    snippetFromFile : string; // reference
    byteRange : range;
    lineRange : range;
}

interface annotation {
    annotator: identity;
    annotationDate : date;
    annotationType : string; // ??? enum?
    comment : string;
    SPDXREF : string; // elementReference
}


