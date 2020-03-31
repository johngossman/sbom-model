// Modeling the property sets in the SPDX 3.0 licensing profile
//



// These interfaces are just skeletons with property names as
// I understand the spec/types and structure for licensing
//
interface licenseInfo {
    licenseConcluded : string;
    licenseInfoInFile : string;
    licenseComments : string; // discuss remove
    licenseDeclared : string;
    copyrightText : string;
}



interface license {
    licenseID : string;
    extractedText : string;
    licenseName : string;
    licenseCrossReference : string; // reference
}