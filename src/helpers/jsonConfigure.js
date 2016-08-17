function jsonConfigure(json){
  return json.replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
}
export default jsonConfigure
