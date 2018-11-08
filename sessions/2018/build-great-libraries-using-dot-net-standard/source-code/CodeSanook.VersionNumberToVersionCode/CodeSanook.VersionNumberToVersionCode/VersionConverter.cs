using System;
using System.Collections.Generic;
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

        public static int VersionNumberToVersionCode(string filePathWithVersionNumber)
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

            return (int)GetVersionCode(versionComponents).Sum();
        }

        /// <summary>
        /// base 100 for version code
        /// </summary>
        private static IEnumerable<double> GetVersionCode(int[] values)
        {
            int lastIndex = values.Length - 1;
            for (var currentIndex = 0; currentIndex < values.Length; currentIndex++)
            {
                var powerNumber = lastIndex - currentIndex;
                yield return values[currentIndex] * Math.Pow(100, powerNumber);
            }
        }
    }
}
