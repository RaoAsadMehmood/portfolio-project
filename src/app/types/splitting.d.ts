'use client'
declare module 'splitting' {
    interface SplittingResult {
      el: HTMLElement;
      chars?: HTMLElement[];
      words?: HTMLElement[];
      lines?: HTMLElement[];
    }
  
    interface SplittingOptions {
      target?: HTMLElement | string;
      by?: 'chars' | 'words' | 'lines';
    }
  
    function Splitting(options?: SplittingOptions): SplittingResult[];
  
    export default Splitting;
  }
  