import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { JobService } from '../../../services/job.service'
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  description;
  id;
  constructor(private jobService: JobService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getDescription();
  }

  getDescription() {
    this.jobService.getDescription(this.id).subscribe(res=>{
      this.description = res.data;
    })
  }

  b64Blob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for(let offset = 0; offset<byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset+sliceSize);
      const byteNumbers = new Array(slice.length);
      for(let i=0; i<slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  public downloadImage() {
    const blob = this.b64Blob(this.description.image_name, 'image/png');
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href=blobUrl;
    a.download = `${this.description.name}.png`;
    a.click();
    URL.revokeObjectURL(blobUrl);
  }

  public downloadPdf() {
    let docDefinition = {
      info:{
        title: `${this.description.name}`,
      },
      content: [
        {
          text: `Government Jobs - ${this.description.name}`,
          bold: true,
          marginBottom: 25,
          decoration: 'underline',
          fontSize: 21,
          alignment: 'center'
        },{
          text: this.description.title,
        },{
          text: this.description.name +' Examination' ,
          bold: true,
          color: 'blue',
          fontSize: 15,
          margin: [0, 10, 0, 10],
        },{
        table:{
          headerRows: 1,
          widths: [200, 150, 150, 100],
          marginRight: 100,
          body: [
            ['Name of the Post', 'Total Vacancies'],
            [{text:this.description.name}, {text:this.description.vacancies}]
          ]
        }
        },{
          text: '√ Area Wise Vacancies:',
          style: 'heading'
        },{    
          text: this.description.area_wise,
          style:'p'
        },{
          text:'√ Age Limit:',
          style: 'heading'
        },{
          text: this.description.age_limit,
          style:'p'
        },{
          text:'√ Pay Scale:',
          style: 'heading'
        },{
          text: this.description.pay_scale,
          style:'p'
        },{
          text:'√ Application Fee:',
          style: 'heading'
        },{
          text: this.description.fee,
          style:'p'
        }
      ],
      styles:{
        heading:{
          bold:true,
          fontSize: 15,
          margin: [0, 15, 0, 10]
        },
        p:{
          fontSize: 10,
          marginLeft: 15
        }
      }
    }
    // pdfMake.createPdf(docDefinition).download('Job Description.pdf');
    pdfMake.createPdf(docDefinition).open();
  }
}
