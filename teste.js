let clientResult = null;
    let price = null;
    let solu = 0;
    const select = await this.findById(id); 
    let id_sales = (select[0].id_sales) 
    let id_product = (select[0].id_product)
    let qtd = (select[0].qtd)

    try {
        clientResult = await serviceSales.findById();
    } catch (error) {
      throw error;
    }

    valuev = clientResult.data[0].value;

    try {
        productResult = await serviceProduct.findById();
    } catch (error) {
      throw error;
    }
    price = productResult.data.value;

    try {
        salesitensResult = await this.findById();
    } catch (error) {
      throw error;
    }

    if (clientResult.data !== []) {
        if (productResult.data !== {}) {
            if (data.id_product != "" && data.qtd != "" && data.id_sale != "") {
                const result = await knex('sales_item')
                    .where('id', '=', id.id)
                    .update({
                        id_product: data.id_product,
                        qtd: data.qtd,
                        price: price,
                        id_sales: data.id_sales
                    });
                let valuenew = (valuev - (qtd * price)) + (data.qtd*price);
                console.log(valuenew)
                const upa = await knex('sales')
                    .where('id', '=', data.id_sales)
                    .update({
                    value: valuenew
                });
                //console.log*(((valuev - (salesitensResult.data[0].qtd * price)))+(data.qtd * price))
                console.log(result);
                return result;
            }
            return {
                message: "falta dados"
            };
        }
        return {
            message: "Product id não encontrado!!"
        };
    }
    return {
        message: "Sales id não encontrado!!"
    };