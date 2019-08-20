using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BoxApi.Migrations
{
    public partial class update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Primary_Color",
                table: "Box",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Primary_Id",
                table: "Box",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Primary_Name",
                table: "Box",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Secondary_Color",
                table: "Box",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Secondary_Id",
                table: "Box",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Secondary_Name",
                table: "Box",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Box_ExtraLabels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true),
                    BoxId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Box_ExtraLabels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Box_ExtraLabels_Box_BoxId",
                        column: x => x.BoxId,
                        principalTable: "Box",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Box_ExtraLabels_BoxId",
                table: "Box_ExtraLabels",
                column: "BoxId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Box_ExtraLabels");

            migrationBuilder.DropColumn(
                name: "Primary_Color",
                table: "Box");

            migrationBuilder.DropColumn(
                name: "Primary_Id",
                table: "Box");

            migrationBuilder.DropColumn(
                name: "Primary_Name",
                table: "Box");

            migrationBuilder.DropColumn(
                name: "Secondary_Color",
                table: "Box");

            migrationBuilder.DropColumn(
                name: "Secondary_Id",
                table: "Box");

            migrationBuilder.DropColumn(
                name: "Secondary_Name",
                table: "Box");
        }
    }
}
