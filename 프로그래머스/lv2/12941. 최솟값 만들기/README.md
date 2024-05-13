[level 2] 최솟값 만들기 - 12941

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12941)

### **Description**

Suppose that there are arrays "A" and "B" that have the same length. Each array consists of natural numbers.

Pick two numbers from array "A" and "B", one from each, and multiply them. Repeat this procedure for the whole array. The multiplied values are added accumulatively. The final goal is to minimize the accumulated value. (However, when the k-th number is chosen from each array, that number cannot be selected again.)

For example, when "A" = `[1, 4, 2]` , "B" = `[5, 4, 4]`,

- Pick the first number of "A" 1 and the first number of "B" 5, and multiply them. (accumulated value : 0 + 5(1x5) = 5)
- Pick the second number of "A" 4 and the third number of "B" 4, and multiply them. (accumulated value : 5 + 16(4x4) = 21)
- Pick the third number of "A" 2 and the second number of "B" 4, and multiply them. (accumulated value : 21 + 8(2x4) = 29)

This case produces the minimum value, therefore return **29**.

Given arrays "A" and "B", write a function "solution" to return the minimum accumulated value.

### Constraints

- Length of array "A" and "B" : natural number less than 1,000.
- Each element of array "A" and "B" : natural number less than 1,000.

### Examples

| A         | B         | answer |
| --------- | --------- | ------ |
| [1, 4, 2] | [5, 4, 4] | 29     |
| [1,2]     | [3,4]     | 10     |

Example #1

It is the same as the example in the problem statement.

Example #2

Pick the first number of "A" 1 and the second number of "B" 4, multiply them, and add it to the accumulated value (accumulated value : 4). Next, pick the second number of "A" 2 and the first number of "B" 3, multiply them, and add it to the accumulated value (accumulated value : 4 + 6 = 10).

Since this case produces the minimum accumulated value, return 10.
