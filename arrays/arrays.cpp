#include <iostream>
#include <string>
using namespace std;

int main(int argc, char** argv) {
	const int SIZE = 10;
	int* arr = new int[SIZE];
	
	for(int i = 0; i < SIZE; i++){
		arr[i] = 42;
		cout << arr[i] << " is number " << (i+1) << endl;

		cin.get();
	}

	delete arr;
	return 0;
}
