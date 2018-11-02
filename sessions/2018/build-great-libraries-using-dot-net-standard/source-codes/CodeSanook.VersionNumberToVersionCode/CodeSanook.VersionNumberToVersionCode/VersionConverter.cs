using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Codesanook.VersionNumberToVersionCode
{
    public class VersionConverter
    {
        /// <summary>
        /// version number supports major.minor.patch
        /// </summary>
        private static Regex versionNumberPattern = new Regex(@"(?<major>\d+)\.(?<minor>\d{1,2})\.(?<patch>\d{1,2})", RegexOptions.Compiled);

        public int VersionNumberToVersionCode(string filePathWithVersionNumber)
        {
            var match = versionNumberPattern.Match(filePathWithVersionNumber);
            if (!match.Success)
            {
                throw new ArgumentException(
                    $"Version number {filePathWithVersionNumber} is invalid, it must be major.minor.patch pattern.",
                    nameof(filePathWithVersionNumber)
                );
            }

            var versionComponents = new[] { "major", "minor", "patch" }
                .Select(component => int.Parse(match.Groups[component].Value))
                .ToArray();

            var versionCode = (int)GetVersionCode(versionComponents);
            return versionCode;
        }

        /// <summary>
        /// base 100 for version code
        /// </summary>
        private static double GetVersionCode(int[] values, int currentIndex = 0)
        {
            int lastIndex = values.Length - 1;
            if (currentIndex == lastIndex)
            {
                return values[currentIndex];
            }
            else
            {
                var powerNumber = lastIndex - currentIndex;
                return values[currentIndex] * Math.Pow(100, powerNumber) + GetVersionCode(values, currentIndex + 1);
            }
        }
    }
}
