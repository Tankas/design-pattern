/*
 * @Author: tanka 984086816@qq.com
 * @Date: 2022-06-28 14:15:02
 * @LastEditors: tanka 984086816@qq.com
 * @LastEditTime: 2022-06-28 14:24:51
 * @FilePath: /design-pattern/src/工厂方法模式/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface IProduct {
    name: string
}

class ProductC implements IProduct {
    name = 'ProductC'
}

interface IFactory {
    createProduct: () => IProduct
}

class Factory1 implements IFactory {
    createProduct() {
        const product = new ProductC()
        console.log('具体工厂输出具体产品', product.name)
        return product
    }
}

new Factory1().createProduct()