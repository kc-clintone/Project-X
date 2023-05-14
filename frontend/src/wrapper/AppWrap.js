import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className='app__wrapper app__flex'>
					<Component />

					<div className='copyright'>
						<p className='p-text'>
							<span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
							2023 &#8226; Xtreme_Art
						</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
