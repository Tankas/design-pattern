/*
 * @Author: tanka 984086816@qq.com
 * @Date: 2022-07-11 14:36:19
 * @LastEditors: tanka 
 * @LastEditTime: 2023-09-11 19:36:36
 * @FilePath: /design-pattern/src/建造者/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Product {
    private partA: string;
    private partB: string;
    private partC: string;
    // 鼠标
    setPartA(partA: string) {
        this.partA = partA
    }
    // 键盘
    setPartB(partB: string) {
        this.partB = partB
    }
    // 显示器
    setPartC(partC: string) {
        this.partC = partC
    }
    show() {
        console.log(`${this.partA}--${this.partB}---${this.partC}`);
        return
    }
}

abstract class IBuild {
    protected pro = new Product();
    abstract createPartA(): void
    abstract createPartB(): void
    abstract createPartC(): void
    public returnResult() {
        return this.pro
    }
    
}

class Build extends IBuild {
    createPartA() {
        this.pro.setPartA('鼠标');
    }

    createPartB() {
        this.pro.setPartB('键盘');
    }

    createPartC() {
        this.pro.setPartC('显示器');
    }

}


class Directer {
    private builder: Build
    constructor(builder: Build) {
        this.builder = builder
    }

    createProduct() {
        this.builder.createPartA();
        this.builder.createPartB();
        this.builder.createPartC();
        return this.builder.returnResult()
    }
    
}


class Client {
    constructor() {
        const builder = new Build();
        const director = new Directer(builder);
        director.createProduct().show();
    }
}

const client = new Client();