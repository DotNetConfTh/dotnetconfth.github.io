using static System.Console;

namespace DotNetConfThailand
{
    public static class Program
    {
        public static ref readonly int RefDemo(this in int x, in int y)
        {
            //x++;// y--;
            return ref x;
        }

        public static void Main(string[] args)
        {
            int a = 1, b = 10;
            ref readonly int c = ref a.RefDemo(b);
            //c += 100;

            WriteLine($"a = {a}, b = {b}, c = {c}");
        }
    }
}
