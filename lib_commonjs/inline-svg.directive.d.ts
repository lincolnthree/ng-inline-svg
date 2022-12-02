import { ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { SVGCacheService } from './svg-cache.service';
import { InlineSVGService } from './inline-svg.service';
import { SVGScriptEvalMode, InlineSVGConfig } from './inline-svg.config';
import * as i0 from "@angular/core";
export declare class InlineSVGDirective implements OnInit, OnChanges, OnDestroy {
    private _el;
    private _viewContainerRef;
    private _resolver;
    private _svgCache;
    private _renderer;
    private _inlineSVGService;
    private _config;
    private platformId;
    inlineSVG: string;
    resolveSVGUrl: boolean;
    replaceContents: boolean;
    prepend: boolean;
    injectComponent: boolean;
    cacheSVG: boolean;
    setSVGAttributes: {
        [key: string]: any;
    };
    removeSVGAttributes: Array<string>;
    forceEvalStyles: boolean;
    evalScripts: SVGScriptEvalMode;
    fallbackImgUrl: string;
    fallbackSVG: string;
    onSVGLoaded: (svg: SVGElement, parent: Element | null) => SVGElement;
    onSVGInserted: EventEmitter<SVGElement>;
    onSVGFailed: EventEmitter<any>;
    private _supportsSVG;
    private _prevUrl;
    private _svgComp;
    private _subscription;
    constructor(_el: ElementRef, _viewContainerRef: ViewContainerRef, _resolver: ComponentFactoryResolver, _svgCache: SVGCacheService, _renderer: Renderer2, _inlineSVGService: InlineSVGService, _config: InlineSVGConfig, platformId: Object);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _insertSVG;
    private _processSvg;
    private _insertEl;
    private _fail;
    private _isValidPlatform;
    private _isSSRDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineSVGDirective, [null, null, null, null, null, null, { optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InlineSVGDirective, "[inlineSVG]", never, { "inlineSVG": "inlineSVG"; "resolveSVGUrl": "resolveSVGUrl"; "replaceContents": "replaceContents"; "prepend": "prepend"; "injectComponent": "injectComponent"; "cacheSVG": "cacheSVG"; "setSVGAttributes": "setSVGAttributes"; "removeSVGAttributes": "removeSVGAttributes"; "forceEvalStyles": "forceEvalStyles"; "evalScripts": "evalScripts"; "fallbackImgUrl": "fallbackImgUrl"; "fallbackSVG": "fallbackSVG"; "onSVGLoaded": "onSVGLoaded"; }, { "onSVGInserted": "onSVGInserted"; "onSVGFailed": "onSVGFailed"; }, never, never, false>;
}
