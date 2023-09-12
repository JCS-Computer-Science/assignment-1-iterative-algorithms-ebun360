function binarySearch(arr, i) {
let start = 0;
let end = arr.length -1;
while (start <= end){
	let mid = Math.floor((start +end)/2)
	if ((arr[mid] === i)){
     return mid;
	}
	if( i < arr[mid]){
		end = mid -1;
	}else{
		start = mid + 1;
	}
}

	return null;
}

module.exports = binarySearch;
