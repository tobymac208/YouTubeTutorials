#include <iostream>
#include <string>
using namespace std;

int main(int argc, char** argv)
{
	const int SIZE = 5;
	int* arrayOfInts = (int *)malloc(sizeof(int) * SIZE);

	for(int i = 0; i < SIZE; i++)
	{
		arrayOfInts[i] = 42;
		cout << arrayOfInts[i] << " is the value of number " << (i+1) << endl;
		cout << &(arrayOfInts[i]) - &(arrayOfInts[0]) << endl;

		cin.get();
	}

	delete arrayOfInts;

	return 0;
}
