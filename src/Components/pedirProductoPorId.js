import data from "../data/productos.json";

const pedirProductoporId = (id) => {
    return new Promise ((resolve, reject) => {
      const item = data.find((el) => el.id === id)
  
      if (item) {
        resolve(item)
      } else {
        reject({
          erorr: "no se encontró el producto"
        })
      }
    })
}

export default pedirProductoporId;