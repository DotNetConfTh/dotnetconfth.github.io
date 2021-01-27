
namespace HelloWorld
{
    public class Currency
    {
        public Currency(decimal amount, string currencyCode)
        {
            Amount = amount;
            CurrencyCode = currencyCode;
        }

        public decimal Amount { get; }
        public string CurrencyCode { get; }
    }
}
