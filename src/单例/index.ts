/*
 * @Author: tanka 984086816@qq.com
 * @Date: 2022-06-24 10:50:33
 * @LastEditors: tanka 984086816@qq.com
 * @LastEditTime: 2022-06-26 11:35:21
 * @FilePath: /design-pattern/src/单例/index.ts
 * @Description: 单例
 */


class Single {
    private static instance: Single;

    public static getInstance() {
        if (!Single.instance) {
            Single.instance = new Single()
        }
        return Single.instance
    }
    
    private constructor() { 
    }
}

