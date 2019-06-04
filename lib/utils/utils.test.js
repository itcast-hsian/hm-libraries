import {randomInt} from "./utils"

// 测试randomInt
test("指定范围随机整数", () => {
    expect(randomInt(1, 10)).toBeLessThan(10);
    expect(randomInt(1, 10)).toBeGreaterThan(1);
})
