
// Modeling the property sets in the 3T SBOM design 
// based on design found here: https://github.com/cdfoundation/sig-security-sbom
//

import { MinItems, MustMatch } from "./validation";

interface checksum {
    algorithm : string; // enum?
    value : string;
}

declare enum agentType {
    person,
    organization,
    tool // ???
}

declare enum relationshipType {
    expandedFromArchive
    // ????
}

declare enum toolType {
    repository
}

declare enum fileType {
    source,
    documentation,
    other
}

interface identity {
    identificationAuthority : string;
    name : string;
    identifier : string; // These strings seem to be complexly typed
    creator : string; 
    type : agentType; 
}

interface relationship {
    name : string;
    identifier : string;
    target : string; // reference type -- string seems to have complex structure
    type : relationshipType;    
}

interface artifact {
    identificationAuthority : string;
    name : string;
    identifier : string;
    component : string;
    version : string;
    checksum : checksum;
}

interface licenseInfo {
    specVersion : string; 
    identificationAuthority : string;
    name : string;
    identifier : string;
    expression : string;
}

interface file {
    name : string;
    identifier : string;
    path : string;
    type : fileType;
    checksum : checksum;
}

interface editor {
    name : string;
    identifier : string;
    type : agentType;
}

interface instrument {
    identificationAuthority : string;
    name : string;
    identifier : string;
    version : string;
    type : toolType;
    editor : editor;
}

interface action {
    name : string;
    identifier : string;
    started : datetime;
    ended : datetime;
    environment : string;
    object : object[]; // ???
    result : object[]; // ???
    instrument : instrument;
    performer : identity;
    argument : object[];
}

interface pedigreeInfo {
    name : string;
    identifier : string;

}

interface document {
    specVersion : string;
    identificationAuthority : string;
    name : string;
    identifier : string;
    created : datetime;
    modified : datetime;
    checksum : checksum;
    populationMethod : string;
    creator : identity;
    sourceOfRelationship : relationshipType;
    artifact : artifact;
    licenseInfo : licenseInfo;
    supplier : identity;
    file : file[];

}

