using Microsoft.EntityFrameworkCore.Migrations;

namespace ChoreChart.Migrations
{
    public partial class RenameDaily : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "title",
                table: "Chore",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "letter",
                table: "Chore",
                newName: "Letter");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Chore",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "weekly",
                table: "Chore",
                newName: "Daily");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Chore",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Letter",
                table: "Chore",
                newName: "letter");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Chore",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Daily",
                table: "Chore",
                newName: "weekly");
        }
    }
}
