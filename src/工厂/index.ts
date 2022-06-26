/*
 * @Author: tanka 984086816@qq.com
 * @Date: 2022-06-24 15:20:21
 * @LastEditors: tanka 984086816@qq.com
 * @LastEditTime: 2022-06-26 11:51:13
 * @FilePath: /design-pattern/src/工厂/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Product {
    sayName: () => void
}

class ProductA implements Product {
    sayName () {
        console.log('i am ProductA')
    }
}

class ProductB implements Product {
    sayName () {
        console.log('i am ProductB')
    }
}

class Factory {
    public static createProduct (kind: string) {
        switch (kind) {
            case 'ProductA' : 
                return new ProductA()
            case 'ProductB' : 
                return new ProductB()
        }
        return null
    }
}

Factory.createProduct('ProductB').sayName()