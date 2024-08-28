import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-details-popup',
  templateUrl: './item-details-popup.component.html',
  styleUrls: ['./item-details-popup.component.css']
})
export class ItemDetailsPopupComponent implements OnInit {
  isOpen = false;
  itemForm: FormGroup;

  // Inject FormBuilder into the constructor
  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.itemForm = fb.group({
      itemShortGenericName: ['', Validators.required],
      itemClass: ['', Validators.required],
      itemCategory: ['General', Validators.required],
      itemGroup: ['Sales', Validators.required],
      itemManufacture: ['', Validators.required],
      itemLength: [null],
      Uom:[null],
      itemBrand: ['', Validators.required],
      itemWidth: [null],
      itemHeight: [null],
      itemThickness: [null],
      itemPartNo: ['', Validators.required],
      itemColor: [''],
      netWeightUnit: [null],
      netWeightUOM: [''],
      grossWeightUnit: [null],
      grossWeightUOM: [''],
      detailedDescription: ['']
    });
  }

  // ngOnInit is no longer needed for form initialization
  ngOnInit() {}

  // Method to open the modal
  open() {
    this.isOpen = true;
  }

  // Method to close the modal
  close() {
    this.isOpen = false;
  }

  // Get kr rakha hai item ko ishe ham api or service ma use kr sakte hai
  saveItemDetails() {
    if (this.itemForm.valid) {
      console.log('Form Data:', this.itemForm.value);
      this.close();
    }
  }

  // Method to clear the item details (resetting the form)
  clearItemDetails() {
    this.itemForm.reset({
      itemCategory: 'General',
      itemGroup: 'Sales'
    });
  }
}
