namespace CodeSanook.VersionNumberToVersionCode.WinApp
{
    partial class frmMain
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnConvert = new System.Windows.Forms.Button();
            this.txtVersionNumber = new System.Windows.Forms.TextBox();
            this.txtVersionCode = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // btnConvert
            // 
            this.btnConvert.Location = new System.Drawing.Point(119, 31);
            this.btnConvert.Name = "btnConvert";
            this.btnConvert.Size = new System.Drawing.Size(129, 36);
            this.btnConvert.TabIndex = 0;
            this.btnConvert.Text = ">> Convert >>";
            this.btnConvert.UseVisualStyleBackColor = true;
            this.btnConvert.Click += new System.EventHandler(this.btnConvert_Click);
            // 
            // txtVersionNumber
            // 
            this.txtVersionNumber.Location = new System.Drawing.Point(13, 40);
            this.txtVersionNumber.Name = "txtVersionNumber";
            this.txtVersionNumber.Size = new System.Drawing.Size(100, 20);
            this.txtVersionNumber.TabIndex = 1;
            this.txtVersionNumber.Text = "1.0.1";
            this.txtVersionNumber.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtVersionCode
            // 
            this.txtVersionCode.Location = new System.Drawing.Point(258, 38);
            this.txtVersionCode.Name = "txtVersionCode";
            this.txtVersionCode.Size = new System.Drawing.Size(100, 20);
            this.txtVersionCode.TabIndex = 2;
            this.txtVersionCode.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // frmMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(378, 130);
            this.Controls.Add(this.txtVersionCode);
            this.Controls.Add(this.txtVersionNumber);
            this.Controls.Add(this.btnConvert);
            this.Name = "frmMain";
            this.Text = "MainForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnConvert;
        private System.Windows.Forms.TextBox txtVersionNumber;
        private System.Windows.Forms.TextBox txtVersionCode;
    }
}

