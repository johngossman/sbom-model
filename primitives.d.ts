/** attributes to mark primitive types with purpose */
declare namespace Attributes {
    /** a value representing a Calendar date */
    interface Date {
    }
  
    /** a value representing a Time */
    interface Time {
    }
  
    /** A constraint is a declarative type used in intersection types to specify a run time value validation  */
    interface Constraint {
    }
  }

  /** an ISO 8601 Date format 
 * 
 * @todo - should this have a Pattern?
 */
declare type date = string & Attributes.Date;

/** an ISO 8601 DateTime format
 * 
 * @todo - should this have a Pattern?
 */
declare type datetime = string & Attributes.Date & Attributes.Time;