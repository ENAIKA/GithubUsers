import { Directive, HostListener, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  @Input() defaultColor;
  @Input() highlight: string = 'white';
  @HostBinding('style.color') color: string = this.defaultColor;

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');

    this.color = this.highlight;
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.color = this.defaultColor;
  }

}
