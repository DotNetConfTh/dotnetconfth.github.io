using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text;

namespace HelloWorld3_1
{
    class TargetTypedConditionalExpressions
    {
        public TargetTypedConditionalExpressions()
        {
            int? score = new Random().NextDouble() > 0.5
                ? 100
                : null;

            bool isReadOnly = true;
            IEnumerable<string> myCollection = isReadOnly
                ? ImmutableList.Create<string>()
                : new List<string>();
        }
    }
}
