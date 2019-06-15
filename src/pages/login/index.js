import React, { useState, useEffect } from 'react'

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Welcome from './containers/welcome';
import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';

import logoVerticalMobile from 'resources/logo/logo-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


function Login(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();

  return (
    <Box className={cx(classes.root, 'showAccount')}>
      <Grid container className={classes.mainPanel}>
        <Grid item xs={12} md={6} className={classes.account}>
          { mediaSmallerThan(media.md) && (
            <img alt="" src={logoVerticalMobile} />
          )}
          <p className={cx(
            globalClasses.textTitle,
            mediaUp(media.md) ?
              globalClasses.textInverseHighlight
              : globalClasses.textContrast
          )}>
            { trans('login.log_into_your_business_manager') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            <FormControl error>
              <Input placeholder={trans('login.email_address')} />
            </FormControl>
            <FormControl>
              <Password icon placeholder={trans('login.password')} />
              {/* <FormHelperText id="password-helper"></FormHelperText> */}
            </FormControl>
            <FormControl>
              <Button inverse={mediaUp(media.md)}>
                {trans(mediaUp(media.md) ? 'login.get_started' : 'login.sign_in')}
              </Button>
            </FormControl>
            <Link
              inverse={mediaUp(media.md)}
              className={classes.forgotPassword}
            >
              {trans('login.forgot_password')}
            </Link>
            <FormControl className={classes.loginWithGoogle}>
              <Button icon={google} grayText>
                { trans('login.login_with_google') }
              </Button>
            </FormControl>
            <Box className={classes.dontHaveAccount}>
              <span className={
                mediaUp(media.md) ?
                  globalClasses.textInverseNormal
                  : globalClasses.textGray
              }>
                { trans('login.dont_have_an_account') }
              </span>
              <Link inverse={mediaUp(media.md)}>
                { trans(mediaUp(media.md) ? 'login.create_one' : 'login.sign_up') }
              </Link>
            </Box>
            { mediaUp(media.md) && (
              <small className={cx(
                globalClasses.textInverseHighlight,
                classes.termPrivacy
              )}>
                <FormattedMessage
                  id='login.by_clicking_get_started'
                  values={{
                    newline: <br/>,
                    terms: (
                      <Link inverse>
                        {trans('login.terms_of_service')}
                      </Link>
                    ),
                    privacy: (
                      <Link inverse>
                        {trans('login.privacy_policies')}
                      </Link>
                    )
                  }}
                />
              </small>
            )}
          </Box>
        </Grid>
        <Welcome/>
      </Grid>
    </Box>
  )
}

export default Login;
