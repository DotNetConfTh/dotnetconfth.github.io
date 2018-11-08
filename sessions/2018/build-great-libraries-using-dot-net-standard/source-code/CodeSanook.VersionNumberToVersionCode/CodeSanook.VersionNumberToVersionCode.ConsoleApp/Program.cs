using Codesanook.VersionNumberToVersionCode;
using System;

namespace CodeSanook.VersionNumberToVersionCode.ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var versionNumber = "1.0.1";
            var versionCode = VersionConverter.VersionNumberToVersionCode(versionNumber);
            Console.WriteLine($"{versionNumber} >> {versionCode}");
        }
    }
}
