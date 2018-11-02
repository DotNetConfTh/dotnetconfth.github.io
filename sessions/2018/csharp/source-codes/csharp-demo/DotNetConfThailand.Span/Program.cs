using System;
using static System.Console;

namespace DotNetConfThailand.SpanDemo
{
    static class Program
    {
        static void Main(string[] args)
        {
            int[] array = new int[10];

            Span<int> span = array.AsSpan();
            ReadOnlySpan<int> slice = span.Slice(3, 5);
            ReadOnlySpan<char> hello = "world";

            for (int i = 0; i < 10; i++)
                span[i] = i;

            foreach (var v in array)
                WriteLine(v);
        }
    }
}
