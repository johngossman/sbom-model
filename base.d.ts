

// Modeling the property sets in the SPDX 3.0 base profile
//

import { MinItems, MustMatch } from "./validation";

interface linePointer {
    lineNumber : number;
    reference : string;
}
  
interface bytePointer {
    offset : number;
    reference : string;
}
  
declare type pointer = linePointer | bytePointer;
  
interface range {
    startPointer : pointer;
    endPointer : pointer;
}

interface checksum {
    algorithm : string; // enum?
    checksumValue : string;
}

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
    SPDXID: string;
    spdxVersion: string & MustMatch<"SPDX-3.0">;
    dataLicense: string;
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
    checksums : checksum[]; 
    summary : string; // PackageSummary
    description : string; // PackageDescription

}

interface package extends artifact {
    versionInfo: string; // also called PackageVersion
    packageFileName: string;
    downloadLocation : string; // url type?

}

interface file extends artifact {
    fileTypes : string[]; // Is filetype an enum?
}

interface snippet extends artifact {
    snippetFromFile : string; // reference
    ranges : range[];
}

interface annotation {
    annotator: identity;
    annotationDate : date;
    annotationType : string; // ??? enum?
    comment : string;
    SPDXREF : string; // elementReference
}


