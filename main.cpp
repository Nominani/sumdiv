#include <iostream>
using namespace std;

int main() // Skeleton of main function
{
	float a, b;
	int choose = 0;
	setlocale(LC_ALL, "Russian");
	
	std::cout << "Введите число A: ";
	std::cin >> a;
	std::cout << "Введите число B: ";
	std::cin >> b;
	
	do
	{
		system("cls");
		
		std::cout << "Выберите операцию:" << std::endl;
		std::cout << "1 - A+B" << std::endl;
		std::cout << "2 - A-B" << std::endl;;
		std::cout << "3 - A*B" << std::endl;;
		std::cout << "4 - A/B" << std::endl;;
		std::cin >> choose;
		
	} while (choose > 4 || choose < 1);

	system("cls");

	switch (choose)
	{
	case 1:
	{
		std::cout << "Операция уже разрабатывается!" << std::endl;
		system("pause");
		break;
	}

	case 2:
	{
		std::cout << "Операция уже разрабатывается!" << std::endl;
		system("pause");
		break;
	}

	case 3:
	{
		std::cout << "Операция уже разрабатывается!" << std::endl;
		system("pause");
		break;
	}

	case 4:
	{
		std::cout << "Операция уже разрабатывается!" << std::endl;
		system("pause");
		break;
	}
	default:
		break;
	}

	return 0;
}