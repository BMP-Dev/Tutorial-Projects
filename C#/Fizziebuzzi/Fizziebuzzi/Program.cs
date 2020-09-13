using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace FizzBuzz
{
    class Program
    {
        static Dictionary<int, string> FBList = new Dictionary<int, string>() { { 3, "Fizz" }, { 5, "Buzz" }, { 7, "Foo" }, { 11, "Bar" } };
        static string FizzBuzz(int N)
        {
            string Output = "";
            foreach (var fizzibuzzies in FBList)
            {
                if ((N % fizzibuzzies.Key) == 0)
                {
                    Output += fizzibuzzies.Value;
                }
            }
            if (Output.Length > 0)
            {
                return Output;
            }
            return N.ToString();
        }
        static void Main(string[] args)
        {
            string M_Output = "";
            for (int x = 0; x < 100; x++)
            {
                M_Output = FizzBuzz(x + 1) + " ";
                Console.WriteLine(M_Output);
            }
        }
    }
}
