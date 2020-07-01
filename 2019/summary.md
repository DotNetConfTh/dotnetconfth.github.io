---
---
<!--
    We use Kramdown so that we can embedded Markdown in HTML 
    https://stackoverflow.com/a/23384161/1872200
-->
<div class="container" markdown="1">
# .NET Conf Thailand - 2019 Meetup Recap

October 26, 2019 Microsoft (Thailand) - Bangkok

---

# SPONSORS

## GOLD SPONSORS

- 7 Peaks
- krungsri
- Ookbee

## SILVER SPONSORS

- i-bitz
- cathcart associates
- Jetabroad
- QueQ

---

# Opening Keynote

Dhanawat Suthumpun
Managing Director at Microsoft Thailand

Dhanawat starts with good news about Microsoft beats Amazon for the Pentagon's $10 billion cloud computing contract and states that Microsoft’s market share is growing so fast.

He also promotes a big event from Microsoft Thailand on Nov 12, 2019

Microsoft Envision Summit 2019

Don't miss the event! 

Register here [http://msft.it/6188TR04p](http://msft.it/6188TR04p)

---

# Scott Hanselman Special Video

Scott Hanselman
Partner Program Manager at Microsoft

Scott records his special video for .NET Conf Thailand. He presents how .Net Core 3 can can make developer life easier by running cross platform and in multiple environments. For example, web, mobile, IoT. 

---

# What's new in C# 8

William Fuqua
Principal Software Engineer at Jetabroad

William shares about the new and awesome features coming in C#8:

- **Nullable reference types**: To prevent the unhandled null reference exceptions.
- **Asynchronous streams**:  To create and consume streams asynchronously.
- **Pattern matching enhancements:** switch expressions, property patterns, tuple patterns & positional patterns.
- **Default interface methods:** To add members to interfaces and provide an implementation for those members.
- **Using declarations:** To reduce closing brace in using statement, we can declare using as a parameter. It tells the compiler that the variable being declared should be disposed at the end of the enclosing scope.

Resource files are here

[https://github.com/waf/DotNetConfThailand.2019.CSharp8](https://github.com/waf/DotNetConfThailand.2019.CSharp8)

If you are interested in the new features, please read this article 

[https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8)

[https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8)

---

# Functional Programming with F#

Michael Kohl
Engineering Lead at Gojek

Michael shares how to implement F# for Functional Programming on the .NET platform. It is multi-paradigm, functional-first programming language. We can solve complex problems with simple, clean code with what F# provides. For example, type inference, discriminated unions and pattern matching, computation expressions, type providers and units of measure.

---

# The Long Hard Road from .NET Framework

Joel Dickson
Senior Developer Manager at Agoda

Joel shares his experience on working in Agoda to migrate from .Net to .Net Core. We can still work on .Net if an application requires unsupported  features in .Net Core. For example, CAS, multiple app domains, WCF, and XML config.  Moving from .Net to .Net Core can make it easier because of better tooling, and support for the docker ecosystem on Linux.

He recommends tips to talk with your management team to use an iterative approach. Not the long-term planning (like 3 - 6 months). 

Start migration with this template road map

- Break app to smaller pieces
- Implement good test coverage
- Move to 4.7.2 or multi targeting
- Check dependencies, upgrade them first (multi target, or move to standard)
- Do piece by piece upgrade over time
- Then deploy change to production  every time we do a piece
- Don't have a long running branch

---

# DevOps for the .NET Developer

Giorgio Desideri
Tech Lead Cloud Solution at 7 Peaks Software

DevOps consists of **Software Development (Dev)** and **Information-technology operations (Ops).**

Giorgio shares the benefit of using DevOps which can **shorten** the **system development life cycle** and provide **continuous delivery** with **high software quality**.

He summarizes DevOps tasks grouped by each position.

- **Management**
    - **Communication**: daily stand-up, frequent feedback
    - **Documentation**: less documentation
    - **Project Management Triangle**: cost, time, scope
- **Development**
    - **Coding**: clean code, understanding infrastructure & operation
    - **Compile & Build**:  work with .Net Core CLI to build, release, docker
    - **Test:** unit testing: xUnit, nUnit, MSTest, function testing: "Gold & Shadow" dataset, integration testing: Flying Monkey (mock)
- **Operation & Maintenance**
    - **Release & Deploy**: versioning (git release, tag), deploy (Azure Pipeline, AWS CodeDeploy, Google AppEngine, Jenkins, Travis-CI, BitBucket, GitLab)
    - **Operate & Monitor**: audit logging, tracing (Azure Event Grid, Event Hub, AppInsight)

---

# Blazor and Azure Functions for Serverless

Vorapat Nicklamai
Azure Consultant at Microsoft

Vorapat shares a way to implement WebAssembly in .Net platform by using Blazor. It provides the ability to build interactive web UIs in client-side browsers by using c# instead of JavaScript. We just compile .cs and .cshtml to .NET assemblies. Then run the dll in the browser directly.

He also demonstrates an easy way to implement serverless architecture with Azure Function, Azure Storage and Azure CDN (for static files).

---

# Creating Libra Cryptocurrency Wallet

Surasuk Oakkharaamonphong
Microsoft MVP and Team Lead at SmartContract

Surasuk starts with the evolution of blockchain:

- **Blockchain 1.0**: Simple Ledgers to record transactions
- **Blockchain 2.0**: Smart Contracts Logic Tier
- **Blockchain 3.0**:  Cloud Servicing Multilayer Middleware + Cryptlets

The libra currency is a global cryptocurrency that people can use for their everyday needs. 

Now there are 5 Libra client libraries:

- Kulap-libra (JavaScript/TypeScript)
- **Blockcoli (.NET Standard)**
- PyLibra (Python)
- Libra-Client (Python)
- JLibra (Java)

**Blockcoli** is the world's first Libra Wallet SDK for .NET implemented by Smart Contract Thailand. It uses gRPC as the communication protocol. We can use the Blockcoli to study Libra Testnet.
For example, creating an account, recovering an account, minting amount, checking an address balance and transferring Libra Coins.

Please see the source code in GitHub

[https://github.com/blockcoli/libranet](https://github.com/blockcoli/libranet)

---

# Xamarin.Forms: More Productive and Beautiful Than Ever

Pranart Dechpokket
Lead Xamarin Developer

Pranart shares benefits of using Xamarin Forms to reduce time to implement- cross-platform mobile apps. Xamarin Forms allows us to work with one language (c#), one library and one codebase. We can now share both UI code and backend code across platforms.

Xamarin Forms prepares tons of built-in user form controls and various layouts ready to use.

Presentation is here

[https://drive.google.com/file/d/1TkncRRav10ayva_8UulaQsynlpNeE2Wt/view?usp=sharing](https://drive.google.com/file/d/1TkncRRav10ayva_8UulaQsynlpNeE2Wt/view?usp=sharing)

---

# Azure Services Every .NET Developer
video from https://www.youtube.com/watch?v=Z9OdipwevSM 

---

# ASP .NET Core & Entity Framework Core

José Barbosa
Senior Software Engineer at Jetabroad

Theeranit Pongtongmuang (Aaron)
Senior Software Engineer at Jetabroad

For EF Core 3.0
Theeranit (Aaron) shared the following topics
New architecture of LINQ provider
Generating efficient SQL queries with performance improvements
Single SQL query per LINQ query
Generate only one SQL statement per LINQ query
Restricted client evaluation
Throw exception if cannot translate LINQ to SQL
C# 8 non-nullable reference support in EF Core 3.0
EF Core 6 has shipped with Microsoft.Data.SqlClient provider
Cosmos DB provider 

José shared the following topics

Presentation is here
gRPC in ASP.NET MVC is a high-performance RPC (remote procedure call) framework
Blazor in ASP.NET MVC
SignalR for real-time web
Built in JSON serialization which is more performant than Newtonsoft.Json
IdentityServer4 for authentication and authorization
Use Pipes on HttpContext
Performance improvement in ASP.NET MVC Core 3

# Easy Game with C# and Unity

Gittitat Ekchantawut

Game Developer at Xrosstales Studio

Yosapol Jitrak
DevOps Engineer at Humanize

They share how to create a game with free and open source tools with a very impressive demo.
The demo built with unity can be installed to all major game platforms.


Presentation is here

[https://drive.google.com/file/d/1goVUDfFEfxE-1i64MjBFqz8XBJU4I3bV/view?usp=sharing](https://drive.google.com/file/d/1goVUDfFEfxE-1i64MjBFqz8XBJU4I3bV/view?usp=sharing)

---

# What's new in [ML.NET](http://ml.net/)

Teerasej Jiraphatchandej
Microsoft MVP and Development Consultant

Teerasej gives an idea of when to use machine learning. Why don't we just use traditional logic like if else to manipulate the data? The reason is that currently we have varieties of data. Not only text, database, and files, but now there are also sound, image, video, etc. It is difficult to implement logic to analyze this data.

So, machine learning can help for this case but developers have to learn more skills. For example, probability and statistics, data modeling & evaluation, and machine learning algorithms. This increases the learning curve. 

Good news, Microsoft produced the [ML.NET](http://ml.NET) with custom ML model. So, C# and F# developers can just select data to analyze and let ML.NET find the best model to train the data. 

Machine Learning workflow

- Model Creation
    - Prepare Your Data
    - Build & Train (Let [ML.NET](http://ml.NET) pick the best model for training)
- Model Consumption
    - Run

Three ways to use ML.NET

- [ML.NET](http://ml.NET) API (Code)
- [ML.NET](http://ml.NET) Model Builder (Visual Studio UI)
- [ML.NET](http://ml.NET) CLI (Command Line Interface)

What [ML.NET](http://ml.NET) can deal with:

- **Sentiment analysis**: Analyze the sentiment of customer reviews using a binary classification algorithm.
- **Product recommendation**: Recommend products based on purchase history using a matrix factorization algorithm.
- **Price prediction**: Predict taxi fares based on distance traveled etc. using a regression algorithm.
- **Customer segmentation**: Identify groups of customers with similar profiles using a clustering algorithm.
- **Object detection**: Recognize objects in an image using an ONNX deep learning model.
- **Fraud detection**: Detect fraudulent credit card transactions using a binary classification algorithm.
- **Sales spike detection**: Detect spikes and changes in product sales using an anomaly detection model.
- **Image classification**: Classify images (e.g. broccoli vs pizza) using a TensorFlow deep learning model.
- **Sales forecasting**: Forecast future sales for products using a regression algorithm.

If you want to get started with ML.NET, please see more details here

[https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet](https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet)

</div>
