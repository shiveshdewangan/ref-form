const schema = [
  {
    type: "text",
    label: "Name",
    name: "name"
  },
  {
    type: "date",
    label: "Birth Date",
    name: "birth_date"
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    genderTypes: ["Male", "Female", ""]
  },
  {
    type: "tel",
    label: "Contact Info",
    name: "contact_info",
    contactTypes: ["Mobile", "Home"]
  },
  {
    type: "checkbox",
    label: "Guardian Consent",
    name: "guardian_consent"
  }
];

export default schema;
