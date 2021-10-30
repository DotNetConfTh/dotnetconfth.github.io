# What's new in C# 9.0

Presentation from .NET Conf Thailand 2020, by Will Fuqua.

See the stream here: https://youtu.be/-iQkrvBBcTA?t=3734

## Contents

- `What's new in C# 9.0.pdf` - slides (only two) from the presentation.
- `What's new in C#.ipynb` - Jupyter notebook of new C# 9.0 features (uses [dotnet interactive](https://github.com/dotnet/interactive)).
- `HelloWorld` - A visual studio solution used during the presentation.

## References

- https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9
- https://devblogs.microsoft.com/dotnet/introducing-c-source-generators/

## Questions from the stream

- I heard will soon have `record class` and `record struct`?
  - Maybe! In C# 9, we just have `record` which means `record class`. In future versions of C# (e.g. 10) we might get new `record class` and `record struct` syntax; and `record` would continue to be a shorthand for `record class`.
- Do we get C# 9 automatically when we create a .Net 5.0 project or do we need to do something else?
  - Yes! We get C# 9 automatically when we create a .NET 5.0 project.
- Is `Customer == null` the same as `Customer is null`? Which one executes quicker?
  - They're not quite the same. If `Customer` implements an [operator overload](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading) for equality, `Customer == null` will call that overload. The pattern matching approach, `Customer is null`, is guaranteed to do a real null check, regardless of any operator overload.
  - For this reason, since C# 7, the recommended way to check for null is to use `Customer is null`. In the absence of overloads, [the performance is identical](https://sharplab.io/#v2:EYLgtghgzgLgpgJwDQxASwDYB8CwAoAAQGYACAgJhIGESBvfExs0ggRgDYTgB7bjEgHIBXDBgCiARyEQMUABRsADCW4BKEgF4AfCs0aSAOxEYA3AybnGxMhy69+w0QAUIMeAgMLWytZp3cSNChDYzM8AF8gA).
