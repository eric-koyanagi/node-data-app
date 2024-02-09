class MapperInterface {
  constructor() {
    if(!this.insertToDatabase) {
      throw new Error("Must have an insertToDatabase method");
    }
  }
}
export { MapperInterface }