<main>
				<h1>Введение в компоненты React</h1>
				<div class="content">
<p>
	Взглянем на любой сайт. Он состоит из набора
	независимых блоков: хедер, сайдбары, футер,
	контент. Можно сказать, что эти блоки и есть
	компоненты в том смысле, в котором подразумевается
	в React.
</p>
<p>
	Если посмотреть на тот же хедер, что в нем
	можно выделить блок с логотипом, блок контактов,
	блок с меню и так далее. То есть компоненты
	могут состоять из других подкомпонентов.
</p>
<p>
	Аналогичным образом дело обстоит в React
	- сайт строится из набора компонентов, которые
	в свою очередь могут содержать другие компоненты.
</p>
<p>
	В React каждый компонент представляет собой
	отдельный модуль. Обычно разработка начинается
	с главного компонента <code class="code inline">App</code>, который
	содержит в себе остальные.
</p>
<p>
	Давайте потренируемся создавать новые компоненты.
</p>
<p>
	Пусть для примера нам нужен компонент, выводящий
	данные продукта. Для этого нам нужно в рабочей
	папке создать файл <code class="path inline">Product.js</code> и добавить
	в него следующий код:
</p>
<div class="block">
	<code class="highlight" data-module="highlight" data-lang="jsx"><span class="line-number line-number-level-1"></span><span class="token token-jsx token-module-import">import</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">React</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-from">from</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-string"><span class="token token-jsx token-plain">'react'</span></span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-keyword">function</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-function">Product</span><span class="token token-jsx token-bracket">()</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-bracket">{</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-keyword">return</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-tag">&lt;p&gt;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>		</span><span class="token token-jsx token-variable">product</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-tag">&lt;/p&gt;</span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-bracket">}</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-module-export">export</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-default">default</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">Product</span><span class="token token-jsx token-punctuation">;</span></code>
</div>
<p>
	Как вы видите, сейчас наш компонент возвращает
	абзац с текстом. В следующих уроках мы подправим
	этот текст так, чтобы возвращались данные
	продукта, оформленные в нужную нам верстку.
	Но пока для разминки оставим просто абзац
	с заготовочным текстом.
</p>
<p>
	Давайте теперь выведем наш созданный компонент
	в компоненте <code class="code inline">App</code>. Пусть сейчас наш
	<code class="code inline">App</code> имеет следующий код:
</p>
<div class="block">
	<code class="highlight" data-module="highlight" data-lang="jsx"><span class="line-number line-number-level-1"></span><span class="token token-jsx token-module-import">import</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">React</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-from">from</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-string"><span class="token token-jsx token-plain">'react'</span></span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-keyword">function</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-function">App</span><span class="token token-jsx token-bracket">()</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-bracket">{</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-keyword">return</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-tag">&lt;div&gt;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>		</span><span class="token token-jsx token-variable">text</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-tag">&lt;/div&gt;</span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-bracket">}</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-module-export">export</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-default">default</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">App</span><span class="token token-jsx token-punctuation">;</span></code>
</div>
<p>
	Для начала нам нужно импортировать созданный
	нами компонент с продуктом:
</p>
<div class="block">
	<code class="highlight" data-module="highlight" data-lang="jsx"><span class="line-number line-number-level-1"></span><span class="token token-jsx token-module-import">import</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">React</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-from">from</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-string"><span class="token token-jsx token-plain">'react'</span></span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-module-import">import</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">Product</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-from">from</span><span class="token token-jsx token-plain"> <span class="break break-1-of-3"><br><span>	</span></span></span><span class="token token-jsx token-string"><span class="token token-jsx token-plain">'./Product'</span></span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain"> <span class="break break-2-of-3"><br><span>	</span></span></span><span class="token token-jsx token-comment">// импортируем <span class="break break-3-of-3"><br><span>	</span></span>продукт<span class="break break-gap-of-3">&nbsp;</span></span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-keyword">function</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-function">App</span><span class="token token-jsx token-bracket">()</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-bracket">{</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-keyword">return</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-tag">&lt;div&gt;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>		</span><span class="token token-jsx token-variable">text</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>	</span><span class="token token-jsx token-tag">&lt;/div&gt;</span><span class="token token-jsx token-punctuation">;</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span></span><span class="token token-jsx token-bracket">}</span><span class="token token-jsx token-plain">
<span class="line-number line-number-level-1"></span>
<span class="line-number line-number-level-2"></span></span><span class="token token-jsx token-module-export">export</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-module-default">default</span><span class="token token-jsx token-plain"> </span><span class="token token-jsx token-variable">App</span><span class="token token-jsx token-punctuation">;</span></code>
</div>
<p>
	После такого импорта внутри компонента <code class="code inline">App</code>
	можно использовать компонент <code class="code inline">Product</code>.
</p>
</div>			</main>
