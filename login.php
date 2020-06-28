<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>로그인 | 배스킨라빈스</title>
<link rel="stylesheet" type="text/css" href="style/common.css" />
<link rel="stylesheet" type="text/css" href="style/login.css" />
<link rel="shortcut icon" type="image/x-icon" href="images/common/favicon.ico" />
<style type="text/css">

</style>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="scripts/login.js">
	
</script>
</head>

<body>

<?php include('header.html') ?>

<div id="content">
<div class="content_tit">
<h3><img src="images/login/h_login.png" alt="로그인"/></h3>
<p>배스킨라빈스 홈페이지에 오신것을 환영합니다.</p>
</div><!-- tit_header end -->


<div class="inner_content">
<div class="section_login">
<div class="box_login">
<h4>배스킨라빈스 로그인<span>해피포인트 아이디로 간편하게 로그인 하세요.</span></h4>
<div class="wrap_login">
<form action="" method="post">
<fieldset>
<legend class="screen_out">로그인폼</legend>
<span class="fm_box1">
<label for="loginid">아이디를 입력하세요</label>
<input type="text" name="id" id="loginid"/>
</span>
<span class="fm_box2">
<label for="loginpw">비밀번호를 입력하세요</label>
<input type="password" name="pw" id="loginpw"/>
</span>
<button type="submit">로그인</button>
</fieldset>
</form>
<ul>
	<li class="li_1"><a href="">아이디 찾기</a></li>
	<li class="li_2"><a href="">비밀번호 재발급</a></li>
	<li class="li_3"><a href="">해피포인트 가입</a></li>
</ul>
</div><!-- wrap_login end -->
</div><!-- box_login end -->

<div class="box_spc">
<div class="spc_service">
<h4>SPC 통합회원 서비스</h4>
<p>하나의 ID/Password로 SPC가 운영하는 사이트(배스킨라빈스, 던킨도너츠, 
해피포인트카드, 파리바게뜨, 파리크라상, 파스쿠찌, SPC그룹,우리밀愛)를 한번에!!
간단한 동의 절차만 거치면 하나의 ID/Password로 제휴사이트를
로그인 하실 수 있습니다.</p>
</div><!-- spc_service end -->
<div class="notice_service">
<h4>고객센터</h4>
<dl>
	<dt>운영시간</dt>
	<dd>월~금 09:00~17:30 토/일요일 휴무</dd>
	<dt>Tel.</dt>
	<dd>080-555-3131(수신자부담)</dd>
</dl>
</div><!-- notice_service end -->
</div><!-- box_spc end -->
</div><!-- section_login end -->




<div class="section_point">
<p>해피포인트 회원이 아니시라면 지금 해피포인트에 가입하시고<br />
다양한 혜택을 경험하세요.</p>
<div class="benefits_area">
<ul>
	<li class="li_1">
		<dl>
			<dt>혜택 하나</dt>
			<dd>배스킨라빈스 온라인 이벤트<br />행사에 참여할 수 있습니다.
			</dd>
		</dl>
	</li>
	<li class="li_2">
		<dl>
			<dt>혜택 둘</dt>
			<dd>월별 신제품을 보다<br /> 먼저 만날 수 있읍니다.
			</dd>
		</dl>
	</li>
	<li class="li_2">
		<dl>
			<dt>혜택 셋</dt>
			<dd>배스킨라빈스 이벤트 정보<br />메일링을 받아 볼 수 있습니다.
			</dd>
		</dl>
	</li>
</ul>
</div><!-- benefits_area end -->
</div><!-- section_point end -->
</div><!-- inner_content end -->
</div><!-- content end -->
	<?php include('footer.html') ?>
</body>
</html>
