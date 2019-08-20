using Microsoft.EntityFrameworkCore.Migrations;

namespace BoxApi.Migrations
{
  public partial class Initial : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.CreateTable(
          name: "Box",
          columns: table => new
          {
            Id = table.Column<string>(nullable: false),
            Color = table.Column<string>(nullable: true),
            Width = table.Column<int>(nullable: false),
            Height = table.Column<int>(nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Box", x => x.Id);
          });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "Box");
    }
  }
}
