using Codesanook.VersionNumberToVersionCode;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CodeSanook.VersionNumberToVersionCode.WinApp
{
    public partial class frmMain : Form
    {
        public frmMain()
        {
            InitializeComponent();
        }

        private void btnConvert_Click(object sender, EventArgs e)
        {
            var converter = new VersionConverter();
            txtVersionCode.Text =
                converter.VersionNumberToVersionCode(txtVersionNumber.Text).ToString();
        }
    }
}
