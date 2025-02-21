/*
Problem: we need to rotate each layer of a matrix by rotation (+, -)
Example with rotation 1
[
    [1,2,3],
    [8,0,4],
    [7,6,5]
]

Result 
[
    [8,1,2],
    [7,0,3],
    [6,5,4]
]
*/


function rotateMatrix(matrix = [[]], rotation){
	if(matrix.length <= 1) return matrix
	const layers = Math.trunc(matrix.length / 2)

	for(let layer = 0; layer < layers; layer++){
		const n =  matrix.length - layer
		const array = []

		for (let i = layer; i < n; i++) array.push(matrix[layer][i]) 
		for (let i = layer + 1; i < n; i++) array.push(matrix[i][n - 1])    
		for (let i = n - 2; i >= layer; i--) array.push(matrix[n - 1][i])
		for (let i = n - 2; i > layer; i--) array.push(matrix[i][layer])
		
		const positive = rotation > 0
		if(positive) array.unshift(...array.splice(array.length - rotation))
		else array.push(...array.splice(0, -rotation))
	
		let index = -1
		for (let i = layer; i < n; i++) matrix[layer][i] = array[++index]
		for (let i = layer + 1; i < n; i++) matrix[i][n - 1] = array[++index]    
		for (let i = n - 2; i >= layer; i--) matrix[n - 1][i] = array[++index]
		for (let i = n - 2; i > layer; i--) matrix[i][layer] = array[++index]
	}
	
	for (let i = 0; i < matrix.length; i++) {
		console.log(matrix[i])
	}
}

const matrix3x3 = [
    [1,2,3],
    [8,0,4],
    [7,6,5]
]

const matrix4x4 = [
    [ 1,2,3,4],
    [12,1,2,5],
    [11,4,3,6],
	[10,9,8,7],
]


const matrix5x5 = [
    [ 1, 2, 3, 4, 5],
    [16, 1, 2, 3, 6],
    [15, 8, 0, 4, 7],
	[14, 7, 6, 5, 8],
	[13,12,11,10, 9],
]

// BigO => O(n)^2 => think in other pisible solution

rotateMatrix(matrix3x3, 1)
console.log()
rotateMatrix(matrix4x4, 1)
console.log()
rotateMatrix(matrix5x5, 1)