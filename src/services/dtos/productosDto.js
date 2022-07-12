


export default class ProductosDto {
    
    constructor ({_id, name, price, thumbnail, description, stock}){
        this.id = _id
        this.name = name,
        this.price = price,
        this.thumbnail = thumbnail,
        this.description = description,
        this.stock = stock
    }
}

export const asDto = ( prod ) => {
    if( Array.isArray(prod) ) 
        return prod.map( d => new ProductosDto(d) )
    else 
        return new ProductosDto(prod)
}