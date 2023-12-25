import{_ as s,o as a,c as n,V as l}from"./chunks/framework.395991b1.js";const b=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"installation.md","filePath":"installation.md"}'),e={name:"installation.md"},p=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><p>Installation and setup of this the package is as easy as you setup other packages.</p><h2 id="install-package" tabindex="-1">Install package <a class="header-anchor" href="#install-package" aria-label="Permalink to &quot;Install package&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>OR</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Or mannually</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#F07178;">dev_dependencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">#...</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tailwind_cli</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^0.7.2</span><span style="color:#A6ACCD;"> </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>And then install the libraries with</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="publish-the-config-file" tabindex="-1">Publish the config file <a class="header-anchor" href="#publish-the-config-file" aria-label="Permalink to &quot;Publish the config file&quot;">​</a></h2><p>Now publish the <code>tailwind.config.json</code> file</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Publishing the <code>tailwind.config.json</code> file will create a config file for Tailwind styles.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-htwL0" id="tab-dhmWsOJ" checked="checked"><label for="tab-dhmWsOJ">tailwind.config.json</label></div><div class="blocks"><div class="language-json active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">colors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">spacers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">fontSizes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">opacity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><h2 id="build-tailwind-styles" tabindex="-1">Build tailwind styles <a class="header-anchor" href="#build-tailwind-styles" aria-label="Permalink to &quot;Build tailwind styles&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This commend will generate whole <code>tailwind</code> project into your prject&#39;s root directory.</p><p>Gererated directory structure.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-qn7cZ" id="tab-xvl7NUb" checked="checked"><label for="tab-xvl7NUb">Tailwind project&#39;s directory structure</label></div><div class="blocks"><div class="language-txt active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">📂 tailwind</span></span>
<span class="line"><span style="color:#A6ACCD;">├── 📂 lib</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── 📂 extensions</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwColorExtension.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwContextExtension.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwNumbersExtension.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── 📄 TwWidgetExtension.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── 📂 mixins</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwAlignmentMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwBorderMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwColorMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwGestureMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwGradientMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwMarginMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwPaddingMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwRoundnessMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwShoadowMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── 📄 TwSizeMixin.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── 📂 utilities</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwColors.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwService.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwSizes.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── 📄 TwUtils.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── 📂 widgets</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwAppBuilder.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwBuilder.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwButton.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwColumn.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwContainer.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwImage.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwInkwell.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwPadding.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwRow.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwStack.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 📄 TwText.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── 📄 TwWrap.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── 📄 tailwind.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">├── 📄 pubspec.lock</span></span>
<span class="line"><span style="color:#A6ACCD;">└── 📄 pubspec.yaml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></div></div><h2 id="add-tailwind-to-your-project" tabindex="-1">Add tailwind to your project <a class="header-anchor" href="#add-tailwind-to-your-project" aria-label="Permalink to &quot;Add tailwind to your project&quot;">​</a></h2><p>Include tailwind in your project&#39;s <code>pubspec.yaml</code> file under <code>dependencies</code> section</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ZVGsg" id="tab-zqV-kf7" checked="checked"><label for="tab-zqV-kf7">pubspec.yaml</label></div><div class="blocks"><div class="language-yaml active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line diff add"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># Tailwind </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tailwind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind</span><span style="color:#A6ACCD;"> </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><h2 id="install-tailwind-in-your-project" tabindex="-1">Install tailwind in your project <a class="header-anchor" href="#install-tailwind-in-your-project" aria-label="Permalink to &quot;Install tailwind in your project&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="configure-your-app-to-use-tailwind" tabindex="-1">Configure your app to use tailwind <a class="header-anchor" href="#configure-your-app-to-use-tailwind" aria-label="Permalink to &quot;Configure your app to use tailwind&quot;">​</a></h2><h3 id="initialize-twservice" tabindex="-1">Initialize TwService <a class="header-anchor" href="#initialize-twservice" aria-label="Permalink to &quot;Initialize TwService&quot;">​</a></h3><p>Go to your <code>main.dart</code> file and initialize <code>TwService</code> in your <code>main()</code> method:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> { </span><span style="color:#676E95;font-style:italic;">// Added async</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TwService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">runApp</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>Note: <code>TwService.init()</code> is an asynchronous method so you need to make <code>main</code> method as async</strong></p><h3 id="configure-materialapp" tabindex="-1">Configure MaterialApp <a class="header-anchor" href="#configure-materialapp" aria-label="Permalink to &quot;Configure MaterialApp&quot;">​</a></h3><p>Now you will need to add <code>TwAppKey</code> into your <code>MaterialApp</code> to do so:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TwService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">appKey</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//... Other properties</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Or if you are using <code>GetX</code> package and <code>GetMaterialApp</code></p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetMaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TwService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">appKey</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//... Other properties</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="add-twappbuilder-optional" tabindex="-1">Add TwAppBuilder (Optional) <a class="header-anchor" href="#add-twappbuilder-optional" aria-label="Permalink to &quot;Add TwAppBuilder (Optional)&quot;">​</a></h3><p>If you want to take benefit of the TwApp reactivity on theme mode change you should add <code>TwAppBuilder</code> into your app.</p><p>To do so wrap your <code>MaterialApp</code> with <code>TwAppBuilder</code>:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">TwAppBuilder</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  builder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ThemeMode</span><span style="color:#A6ACCD;"> themeMode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TwService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">appKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    themeMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> themeMode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// To add dynamic theme</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//... Other properties</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="made-any-changes" tabindex="-1">Made any changes? <a class="header-anchor" href="#made-any-changes" aria-label="Permalink to &quot;Made any changes?&quot;">​</a></h2><p>Make sure to re-build tailwind styles if you have made any changes in the config file.</p><p>To do so run this command:</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwind_cli:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will generate whole tailwind styles and widgets with the new configuration that you added in the <code>tailwind.config.json</code> file.</p>`,50),o=[p];function r(t,i,c,d,y,C){return a(),n("div",null,o)}const A=s(e,[["render",r]]);export{b as __pageData,A as default};
