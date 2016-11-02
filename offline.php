<?php
/**
 * @package     Joomla.Site
 * @subpackage  Template.system
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$app = JFactory::getApplication();

// Add JavaScript Frameworks
JHtml::_('bootstrap.framework');

require_once JPATH_ADMINISTRATOR . '/components/com_users/helpers/users.php';

$twofactormethods = UsersHelper::getTwoFactorMethods();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
	<head>
        <jdoc:include type="head" />
		<link rel="shortcut icon" type="image/ico" href="favicon.ico"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:title" content="Wasteless | An Environment Lethbridge Project" />
		<meta property="og:description" content="Did you know Lethbrige is one of the most wasteful cities on earth? Wasteless is an online educational tool that makes the case for waste reduction in Lethbridge." />
		<meta property="og:image" content="http://www.wasteless.ca/images/section1_screencap2.png" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/general.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/template.css" />	
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/prelaunch.css">

	</head>
	<body>
        <img id="backgroundimg" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/watertower_offlinepage.svg">
         <div id="landing">
            <div id="logo">
                <img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/Wasteless_Logo.svg" alt="Wasteless Logo">
                <hr>
                <h3>On November 9, Wasteless will make the case for waste reduction in Lethbridge.</h3>
                <p>Join us at the <a href="http://environmentlethbridge.ca/" title="Environment Lethbridge">Environment Lethbridge</a> office from 1-2PM for the website launch event.</p>
                <p>319-6 St. S. Lethbridge, AB</p>
            </div>

            
        </div>
        <div id="login">
             <form action="<?php echo JRoute::_('index.php', true); ?>" method="post" id="form-login">
                <fieldset class="input">
                    <p id="form-login-username">
                        <label for="username"><?php echo JText::_('JGLOBAL_USERNAME'); ?></label>
                        <input name="username" id="username" type="text" class="inputbox" alt="<?php echo JText::_('JGLOBAL_USERNAME'); ?>" autocomplete="off" autocapitalize="none" />
                    </p>
                    <p id="form-login-password">
                        <label for="passwd"><?php echo JText::_('JGLOBAL_PASSWORD'); ?></label>
                        <input type="password" name="password" class="inputbox" alt="<?php echo JText::_('JGLOBAL_PASSWORD'); ?>" id="passwd" />
                    </p>
                    <?php if (count($twofactormethods) > 1) : ?>
                        <p id="form-login-secretkey">
                            <label for="secretkey"><?php echo JText::_('JGLOBAL_SECRETKEY'); ?></label>
                            <input type="text" name="secretkey" class="inputbox" alt="<?php echo JText::_('JGLOBAL_SECRETKEY'); ?>" id="secretkey" />
                        </p>
                    <?php endif; ?>
                    <p id="submit-buton">
                        <input type="submit" name="Submit" class="button login" value="<?php echo JText::_('JLOGIN'); ?>" />
                    </p>
                    <input type="hidden" name="option" value="com_users" />
                    <input type="hidden" name="task" value="user.login" />
                    <input type="hidden" name="return" value="<?php echo base64_encode(JUri::base()); ?>" />
                    <?php echo JHtml::_('form.token'); ?>
                </fieldset>
            </form>
            </div>
	</body>
</html>

