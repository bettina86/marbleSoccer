Marble.PageLandingMain	= function()
{
	this._pageSel		= "#pageLandingContainer";
	
	this._pageGameMain	= null;

	jQuery(this._pageSel).show();
	
	this._menuShow();
	
	this._$playButtonClick		= this._playClick.bind(this);
	this._$tutorialButtonClick	= this._tutorialShow.bind(this);
	this._$aboutButtonClick		= this._aboutShow.bind(this);
	jQuery(this._pageSel+" .menuDialog .button.play").bind('click'		, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").bind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").bind('click'		, this._$aboutButtonClick);
}

Marble.PageLandingMain.prototype.destroy	= function()
{
	this._pageGameMainDtor();

	jQuery(this._pageSel).hide();
	jQuery(this._pageSel+" .menuDialog .button.play").unbind('click'	, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").unbind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").unbind('click'	, this._$aboutButtonClick);
}

Marble.PageLandingMain.prototype._menuShow	= function()
{
	var dialogSel	= this._pageSel+' .menuDialog';
	jQuery(dialogSel).jqm({
		overlay	: 0
	});
	jQuery(dialogSel).jqmShow();
}

//////////////////////////////////////////////////////////////////////////////////
//		callbacks for button						//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._playClick	= function()
{
	this._pageGameMainCtor();
}


Marble.PageLandingMain.prototype._tutorialShow	= function()
{
	var dialogSel	= this._pageSel+' .tutorialDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}

Marble.PageLandingMain.prototype._aboutShow	= function()
{
	var dialogSel	= this._pageSel+' .aboutDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}

//////////////////////////////////////////////////////////////////////////////////
//		pageGameMain							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._pageGameMainCtor	= function()
{
	console.assert( !this._pageGameMain );
	
	this._pageGameMain	= new Marble.PageGameMain();
	
	this._$pageGameMainOnCompleted	= this._pageGameMainOnCompleted.bind(this);
	this._pageGameMain.bind('completed', this._$pageGameMainOnCompleted);

	jQuery(this._pageSel).hide();
}

Marble.PageLandingMain.prototype._pageGameMainDtor	= function()
{
	if( !this._pageGameMain )	return;
	
	this._pageGameMain.unbind('completed', this._$pageGameMainOnCompleted);
	this._pageGameMain.destroy();
	this._pageGameMain	= null;
}

Marble.PageLandingMain.prototype._pageGameMainOnCompleted	= function()
{
	this._pageGameMainDtor();
	jQuery(this._pageSel).show();
}