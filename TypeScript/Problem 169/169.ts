
export function majorityElement(nums: number[]): number {
    const hashMap = new Map<number, number>();

    nums.forEach(number => {
        if (hashMap.has(number)) {
            hashMap.set(number, (hashMap.get(number) as number) + 1);
        } else {
            hashMap.set(number, 1);
        }
    });

    const result  = Array.from(hashMap.entries()).sort((a, b) => b[1] - a[1])[0];
    return result[0];
}